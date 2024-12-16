import React, { useState } from "react";

import "./Modal.css";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(
        defaultValue || {
            ctpy: "",
            product: "",
            mw: "",
            price: "",
            status: "live",
        }
    );

    const [errors, setErrors] = useState("");

    const validateForm = () => {
        if (formState.ctpy && formState.product && formState.mw && formState.price && formState.status) {
            setErrors("");
            return true;
        } else {
            let errorFields = [];
            for (const [key, value] of Object.entries(formState)) {
                if (!value) {
                    errorFields.push(key);
                }
            }
            setErrors(errorFields.join(","));
            return false;
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);
        closeModal();
    };

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container") closeModal();
            }}
        >
            <div className="modal">
                <form>
                    <div className="form-group">
                        <label htmlFor="ctpy">CTPY</label>
                        <input name="ctpy" onChange={handleChange} value={formState.ctpy} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Product">Product</label>
                        <textarea
                            name="product"
                            onChange={handleChange}
                            value={formState.product}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="MW">MW</label>
                        <input name="MW" onChange={handleChange} value={formState.mw} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">£</label>
                        <input name="price" onChange={handleChange} value={formState.price} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status</label>
                        <select
                            name="status"
                            onChange={handleChange}
                            value={formState.status}
                        >
                            <option value="live">Live</option>
                            <option value="PF">PF</option>
                            <option value="Filled">Filled</option>
                        </select>
                    </div>
                    {errors && <div className="error">{`Please include: ${errors}`}</div>}
                    <button type="submit" className="btn" onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};