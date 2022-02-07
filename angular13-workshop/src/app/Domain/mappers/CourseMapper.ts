import { Course } from '../models/course';
import { Course as CourseIF } from '../../Infraestructure/models/course';

export const courseMapper = {
    mapDomainCourseToIFCourse: (course: Course) => {
        const courseIf: CourseIF = {
            id: course.id,
            title: course.title,
            percentComplete: course.percentComplete,
            favorite: course.favorite,
            description: course.description,
        };
        return courseIf;
    },
};
