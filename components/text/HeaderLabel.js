export default function Label({ children }) {
    return (
        <div className="mb-2">
            <p className="uppercase md:text-xl font-hntRegular">{children}</p>
        </div>
    );
}
