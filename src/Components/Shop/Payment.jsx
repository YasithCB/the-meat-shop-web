import {useEffect, useState} from "react";
import {Upload} from "lucide-react";
import {toast} from "react-toastify";
import {createCharge} from "../../api/paymentAPI.js";
import {useContextElement} from "../../context/Context.jsx";

const Checkout = ({totalPrice, method}) => {
    const { currentUser } = useContextElement();

    const [paymentSlip, setPaymentSlip] = useState(null);
    const [tokenId, setTokenId] = useState('');

    useEffect(() => {
        const configureCardSDK = async () => {
            const {renderTapCard, Theme, Currencies, Direction, Edges, Locale} = window.CardSDK
            const {unmount} = renderTapCard('card-sdk-id', {
                publicKey: 'pk_test_nx0SMQFNreyZXchYHvKft7wg', // Tap's public key
                merchant: {
                    id: '67993052'
                },
                transaction: {
                    amount: totalPrice,
                    currency: Currencies.AED
                },
                acceptance: {
                    supportedBrands: ['VISA', 'MASTERCARD', 'MADA'], //Remove the ones that are NOT enabled on your Tap account
                    supportedCards: "ALL" //To accept both Debit and Credit
                },
                fields: {
                    cardHolder: true
                },
                addons: {
                    displayPaymentBrands: true,
                    loader: true,
                    saveCard: true
                },
                interface: {
                    locale: Locale.EN,
                    theme: Theme.LIGHT,
                    edges: Edges.CURVED,
                    direction: Direction.LTR
                },
                onReady: () => {
                },
                onFocus: () => {
                },
                onBinIdentification: () => {
                },
                onValidInput: () => {
                },
                onInvalidInput: () => {
                },
                onError: (data) => console.log('onError', data),
                onSuccess: async (data) => {
                    console.log('OnSuccess', data)
                    setTokenId(data.id)
                },
                onChangeSaveCardLater: (isSaveCardSelected) => {
                } // isSaveCardSelected:boolean
            })
        }

        configureCardSDK()
    }, []);

    const handleFileChange = (e) => {
        setPaymentSlip(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (method === "bank") {
            if (!paymentSlip) return toast.error("Please select a file first.");
        }

        // ⏳ tokenize the card and wait
        await window.CardSDK.tokenize();

        // now safely use tokenResponse.id
        const createChargeResp = await createCharge({
            amount: totalPrice,
            token_id: tokenId,
            description: '',
            order_id: tokenId,
            customer_name: currentUser.name,
            customer_email: currentUser.email,
            customer_phone: currentUser.phone,
        });

        // redirect to Tap payment page
        window.location.href = createChargeResp.data.transaction.url;

        // Example upload using FormData
        // const formData = new FormData();
        // formData.append("bankSlip", paymentSlip);
        //
        // fetch("/api/upload/bank-slip", {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log("Uploaded:", data);
        //         alert("Bank slip uploaded successfully!");
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         alert("Upload failed. Please try again.");
        //     });
    };

    return (
        <div className="th-checkout-wrapper section-padding fix">
            <div className="container">

                {method === 'card' ?
                    // PAYMENT GATEWAY
                    <div className='mb-4'>
                        <div id="card-sdk-id" className='mb-5'></div>
                    </div>
                    :
                    // BANK SLIP
                    <div className="p-3 border rounded bg-light">
                        <h6 className="mb-2 title">Upload Bank Payment Slip</h6>
                        <p className="text-muted small mb-3">
                            Please upload your payment receipt or bank transfer slip (JPG, PNG, or PDF).
                        </p>

                        <div className="d-flex align-items-center gap-3">
                            <label className="btn btn-outline-dark mb-0">
                                <Upload size={18} className="me-2"/>
                                Choose File
                                <input
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    onChange={handleFileChange}
                                    className="d-none"
                                />
                            </label>

                            {paymentSlip && (
                                <div className="d-flex align-items-center gap-3 mt-3 p-2 border rounded bg-white shadow-sm">
                                    {/* Preview area */}
                                    {paymentSlip.type.startsWith("image/") ? (
                                        <img
                                            src={URL.createObjectURL(paymentSlip)}
                                            alt="Payment Slip Preview"
                                            className="rounded border"
                                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                        />
                                    ) : paymentSlip.type === "application/pdf" ? (
                                        <div
                                            className="d-flex justify-content-center align-items-center bg-light rounded border"
                                            style={{ width: "80px", height: "80px" }}
                                        >
                                            <i className="bi bi-file-earmark-pdf text-danger fs-2"></i>
                                        </div>
                                    ) : (
                                        <div
                                            className="d-flex justify-content-center align-items-center bg-light rounded border"
                                            style={{ width: "80px", height: "80px" }}
                                        >
                                            <i className="bi bi-file-earmark text-secondary fs-2"></i>
                                        </div>
                                    )}

                                    {/* File info */}
                                    <div>
                                          <span className="text-success fw-semibold d-block">
                                            <i className="bi bi-check-circle-fill me-1"></i> {paymentSlip.name}
                                          </span>
                                        <small className="text-muted d-block">
                                            {(paymentSlip.size / 1024).toFixed(1)} KB •{" "}
                                            {paymentSlip.type.split("/")[1].toUpperCase()}
                                        </small>
                                        <button
                                            className="btn btn-sm btn-outline-danger mt-2"
                                            onClick={() => setPaymentSlip(null)}
                                        >
                                            <i className="bi bi-x-lg me-1"></i> Remove
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                }

                {/* SUBMIT */}
                <div className="col-12 form-group mb-0 mt-3">
                    <button onClick={handleUpload} className="theme-btn btn btn-primary w-100 text-uppercase fw-bold">
                        Continue to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;