class Student
{
    constructor(roll, name, branch)
    {
        this.roll = roll
        this.name = name
        this.branch = branch
    }
    study()
    {
        console.log("study js")
    }
    party()
    {
        console.log("maggie party")
    }
    intro()
    {
        console.log("Roll = "+this.roll)
        console.log("Name = "+this.name)
        console.log("Branch = "+this.branch)
    }
}
st = new Student(101, "deep", "cse")
st.study()
st.party()
st.intro()