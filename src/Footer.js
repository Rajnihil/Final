
import React from "react";

function Footer() {
    return (
        <footer
            style={{
                borderTop: "1px solid #e8e8e8",
                padding: "32px 48px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "12px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "#aaa",
                backgroundColor: "#fff",
            }}
        >
            <span>
                <span style={{ fontFamily: "'DM Serif Display', serif", color: "#111", fontSize: "16px" }}>
                    CodeClub
                </span>
                {" "}· Student Developer Community
            </span>
            <span>© 2024 CodeClub. All rights reserved.</span>
        </footer>
    );
}

export default Footer;
