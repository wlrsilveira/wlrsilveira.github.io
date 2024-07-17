import React from 'react'

function DefaultMenu(props) {

    let devider = () => {
        return (
            <div className="flex justify-center w-full">
                <div className=" border-t border-gray-900 py-1 w-2/5"></div>
            </div>
        );
    }

    return (
        <div id="default-menu" className={(props.active ? " block " : " hidden ") + " cursor-default w-52 context-menu-bg border text-left border-gray-900 rounded text-white py-4 absolute z-50 text-sm"}>
            <a rel="noreferrer noopener" href="https://github.com/wlrsilveira/wlrsilveira.github.io" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🌟</span> <span className="ml-2">Star this Project</span>
            </a>
            {devider()}
            <a rel="noreferrer noopener" href="https://www.linkedin.com/in/wagner-silveira-56a97382/" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🙋‍♂️</span> <span className="ml-2">Follow on <strong>Linkedin</strong></span>
            </a>
            <a rel="noreferrer noopener" href="https://wlrsilveira.github.io" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🤝</span> <span className="ml-2">Follow on <strong>Github</strong></span>
            </a>
            <a rel="noreferrer noopener" href="mailto:wagner.resta@outlook.com" target="_blank" className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">📥</span> <span className="ml-2">Contact Me</span>
            </a>
            {devider()}
            <div onClick={() => { localStorage.clear(); window.location.reload() }} className="w-full block cursor-default py-0.5 hover:bg-ub-warm-grey hover:bg-opacity-20 mb-1.5">
                <span className="ml-5">🧹</span> <span className="ml-2">Reset Ubuntu</span>
            </div>
        </div>
    )
}

export default DefaultMenu
