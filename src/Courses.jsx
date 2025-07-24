import './styles.css'
import CommonOurCoursesCard from './components/common_our_courses_card';
import CommonTitleComponent from './components/common_title_component';

function Courses() {
    return (
        <main>
            <CommonTitleComponent
                title={"Our Courses"}
                description={"Not just any courses, we provide the excellent teaching-learning experience to prepare you in your career."}
            />

            <div className='our-courses-grid-container'>
                <CommonOurCoursesCard
                    imageUrl={"https://media.edusanjal.com/gallery/shikshyalaya_8.jpg"}
                    title={"CSIT"}
                    description={"Shikshyalaya College - Lokanthali, Bhaktapur - Edusanjal"}
                    semesters={8}
                    years={4} />
            </div>
        </main>
    );
}
export default Courses;