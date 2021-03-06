import API from '@/services/API'

export default {
  getCourses() {
    return API().get('courses')
  },
  addCourse(course) {
    return API().post('courses/add', {
      course: course // add our data to the request body
    })
  },
  getCourse(id) {
    return API().get('courses/edit/' + id)
  },
  updateCourse(id, course){
    return API().post('courses/update/' + id, {
      updated_course: course
    })
  },
  deleteCourse (id) {
    return API().delete('courses/delete/' + id)
  },
  getInstructor (course_id) {
    return API().get('courses/getInstructor/' + course_id)
  }
}
