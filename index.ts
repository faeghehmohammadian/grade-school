interface Students {
    [key: number]: string[]
  }
  export class GradeSchool {
    private students: Students = {}
    
    roster() {
      return JSON.parse(JSON.stringify(this.students))
    }
    add(name: string, grade: number) {
      for(let key in this.students) {
        this.students[key] = this.students[key].filter((student) => student !== name)
      }
      
      this.students[grade] = this.students[grade] ? [...this.students[grade], name] : [name]
      this.students[grade].sort()
    }
    grade(grade: number) {
      return this.students[grade] ? [...this.students[grade]] : []
    }
  }