export default function Header1({ children }) {
    return (
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-anBold">
            {children}
        </h1>
    );
}
