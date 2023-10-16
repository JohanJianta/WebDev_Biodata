export default function Accordion({
    title,
    children,
    isActive,
    onShow
}) {
    return (
        <button className="accordion" onClick={onShow}>
            {title}
            {isActive ? (
                <p>{children}</p>
            ) : ('')}
        </button>
    );
}