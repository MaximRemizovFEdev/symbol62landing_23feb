import React from "react";
import * as styles from "./style.module.scss";

export default function Button ({ text, variant, type, onClick, href, size }) {
    const clnm = `
        ${styles.btn}
        ${variant === "fill" ? styles.fill : styles.stroke} 
        ${size === "small" ? styles.small : styles.big}
    `;

    if (type === "a") return (
        <a className={clnm} href={href} target="_blank">
            {text}
        </a>
    )

    return (
        <button type="button" className={clnm} onClick={onClick}>
            {text}
        </button>
    )
}