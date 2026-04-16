function Sidebar ({isOpen,toggleSidebar}) {
    return(<>
    {isOpen && ( <div className="overlay" onClick={toggleSidebar}></div> )}
    <div className={`sidebar ${isOpen ? "active" : "" }`}>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
    </div>
    </>);
};
export default Sidebar;