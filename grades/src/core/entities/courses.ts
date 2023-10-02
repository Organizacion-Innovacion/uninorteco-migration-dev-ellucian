import { BaseCourse } from "./base-course";

export interface PartialComponent {
  /** the id of the component */
  id: string;
  /** the grade of the component. if grade is equal to -1 it means
   * that the grade is not a number between 0 and 5.
   * This is possible for special courses which does not have a standard grade
   * such as AP, NP. Also for schema errors */
  grade: number;
  /** for special courses, the grade is a string. ex: "AP", "NP" */
  gradeAsString: string;
  /** the name of the component */
  name: string;
  /** the weight of the component, weight is a percentage from 0 to 100 */
  weight: number;
  /** whether the component has been evaluated, which means that the grade is definitive */
  wasEvaluated: boolean;
}

export interface SemesterCourse extends BaseCourse {
  /**
   * the current grade of the course. The grade you have accumulated up to now. if grade is equal to -1 it means that the grade could not be computed
   * */
  grade: number;
  /** course credits */
  credits: number;
  /** whether the component has been evaluated, which means that the grade is final */
  wasEvaluated: boolean;
  /** the partial components of the course */
  components: PartialComponent[];
}

export interface AcademicSemester {
  /** the name of the semester. ex 'Semestre 2021-30' */
  name: string;
  /** the courses of the semester */
  courses: SemesterCourse[];
}
