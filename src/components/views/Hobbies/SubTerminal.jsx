const SubTerminal = ({
    title,
    command,
    children,
}) => {
    return (
        <div
            className="overflow-hidden mb-6"
        >
            {/* Terminal Body */}
            <div className="px-4 py-3 font-mono text-green-300 text-xs space-y-3">
                <div className="text-green-600">
                    $ {command}
                </div>

                <div className="space-y-3">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default SubTerminal;