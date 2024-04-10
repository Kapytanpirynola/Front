


function Banner (){
    return(
        <section className="bg-customD text-customA">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                <h1
                    className="bg-slate-300 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                    
                    <span className="sm:block"> Incrementa tu alcance. </span>
                </h1>

                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                    soluciona tus citas.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                    className="block w-full rounded border border-customA bg-customB px-12 py-3 text-sm font-medium text-customA hover:bg-transparent hover:text-customA focus:outline-none focus:ring active:text-opacity-75 sm:w-auto transition-all"
                    href="/cita"
                    >
                    Primer paso
                    </a>

                    <a
                    className="block w-full rounded border border-customA px-12 py-3 text-sm font-medium text-customA hover:bg-customB focus:outline-none focus:ring active:bg-customC sm:w-auto transition-all"
                    href="/conocenos"
                    >
                    Saber más
                    </a>
                </div>
                </div>
            </div>
            </section>
    )
}

export default Banner;