import DashboardBannerComponent from "./components/dashboard_banner_component.jsx";
import CommonTitleComponent from "./components/common_title_component.jsx";
import CommonOurValuesComponent from "./components/common_our_values_component.jsx";
import CommonOurProgramsCard from "./components/common_our_programs_card.jsx";
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

            <CommonTitleComponent
                title={"OUR PROGRAMS"}
                description={"Not just any programs, we provide the excellent teaching-learning experience to prepare you in your career."} />

            <div className="our-programs-grid-container">
                <CommonOurProgramsCard
                    title={"Master of Business Admin"}
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_3.jpg"}
                    years={2}
                    semesters={4}
                    />

                    <CommonOurProgramsCard
                    title={"CSIT"}
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_2.jpg"}
                    years={4}
                    semesters={8}
                    />
            </div>
        </main>

    );
}

export default Dashboard;