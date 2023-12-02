export class GradeSchool {
    constructor(){
    this._roster = {}; // initialize as empty
    }
    
    roster() {
        return structuredClone(this._roster); // return copy of roster
    }
    add(name, grade) {
        // check for name in grade of roster and remove if found
        for(const g in this._roster){
        const index = this._roster[g].indexOf(name);
        if(index >= 0){ this._roster[g].splice(index, 1) }
        }
        // add name to given grade
        this._roster[grade] = [...(this._roster[grade] || []), name].sort();
    }
    grade(grade) {
        // return copy or empty array if nothing is found
        return Array.from(this._roster[grade] || []);
    }
    }