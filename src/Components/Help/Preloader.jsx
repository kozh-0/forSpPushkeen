
export default function Preloader() {
    const style = {
        display: "inline-block",
        position: "relative",
        width: "80px",
        height: "80px"
    }
    const styleDiv = {
        boxSizing: "border-box",
        display: "block",
        position: "absolute",
        width: "64px",
        height: "64px",
        margin: "8px",
        border: "8px solid #fff",
        borderRadius: "50%",
        animation: "lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        borderColor: "#15ceb6 transparent transparent transparent"
    }

    return (
        <div className="lds-ring" style={style}>
            <div style={{...styleDiv, animationDelay: "-0.45s"}}></div>
            <div style={{...styleDiv, animationDelay: "-0.3s"}}></div>
            <div style={{...styleDiv, animationDelay: "-0.15s"}}></div>
            <div style={styleDiv}></div>
        </div>
    )
}