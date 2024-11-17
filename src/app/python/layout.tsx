import './../css/font-poppins.css'

const ImageTitleComponent = () => {
    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex flex-col items-center">
                <img src="/python-logo.svg" alt="Descripción de la imagen" className="w-32 h-32 mb-4" />
                <h1 className="text-lg font-bold text-gray-800">Python</h1>
                <p className="text-center text-sm font-light text-gray-500 mt-2">
                    Estas son mis notas de Python, espero te puedan servir.
                </p>
                <ul className="mt-5">
                    <li>Introducción a [PCEP-30-02] PCEP</li>
                </ul>
            </div>
        </div>
    )
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex h-screen">
            <div className="w-1/4 hidden sm:flex bg-gray-200 p-4 items-center justify-center">
                <ImageTitleComponent />
            </div>
            <div className="w-full sm:w-3/4 ">{children}</div>
        </main>
    )
}
