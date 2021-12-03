export default function Header1({ children }) {
    return (
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-hntMedium">
            {children}
        </h1>
    );
}
