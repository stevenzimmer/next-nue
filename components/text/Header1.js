export default function Header1({ children }) {
    return (
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-hntMedium font-medium">
            {children}
        </h1>
    );
}
