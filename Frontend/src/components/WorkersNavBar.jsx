import { NavLink } from "react-router-dom";

function WorkersNavBar() {

     return (
        <footer className="nav-container">
            <NavLink to="/new-orders">
                <section className="new">
                    <img src="/public/assets/icons/new.png" alt=""  />
                </section>
            </NavLink>
            <NavLink to="/preparing-orders">
                <section className="prepare">
                    <img src="/public/assets/icons/prepare.png" alt="" />
                </section>
            </NavLink>
            <NavLink to="/ready-orders">
                <section className="ready">
                    <img src="/public/assets/icons/ready.png" alt="" />
                </section>
            </NavLink>
        </footer>
     );
}

export default WorkersNavBar;