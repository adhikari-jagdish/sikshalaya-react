import DashboardBannerComponent from "./components/dashboard_banner_component.jsx";
import CommonTitleComponent from "./components/common_title_component.jsx";
import CommonOurValuesComponent from "./components/common_our_values_component.jsx";
function Dashboard() {
    return (
        <main>
            <DashboardBannerComponent />
            <CommonTitleComponent
                title={"OUR VALUES"}
                description={"Guiding Principles that Shape Our Academic Community and Inspire Excellence."} />

            <div className="our-values-grid-container ">
                <CommonOurValuesComponent
                    imageUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/excellence.png"}
                    title={"Academic Excellence"} />

                <CommonOurValuesComponent
                    imageUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/innovation.png"}
                    title={"Innovation & Creativity"} />

                <CommonOurValuesComponent
                    imageUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/Integrity.png"}
                    title={"Integrity & Ethics"} />

                <CommonOurValuesComponent
                    imageUrl={"https://shikshyalayacollege.edu.np/wp-content/uploads/2024/08/Diversity.png"}
                    title={"Diversity and Inclusion"} />

            </div>
        </main>

    );
}

export default Dashboard;