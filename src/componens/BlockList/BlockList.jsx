import "../BlockList/BlockList.scss"

const BlockList = ({active, setActive, children}) => {
    return(
    
            <div className={active ? "block__content active" : "block__content"} onClick={e =>e.stopPropagation()}>
                <div className="block__close" onClick={() => setActive(false)}>
                    <div className="block__close-line modal__close-line--first"></div>
                    <div className="block__close-line modal__close-line--second"></div>
                </div>
                {children}
            </div>
    )
}

export default BlockList;