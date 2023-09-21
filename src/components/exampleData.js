import { v4 as uuidv4 } from "uuid";

const exampleData = {
  personalInfo: {
    firstName: "Ben",
    lastName: "Johnson",
    address: "1234 Oak St",
    email: "ben.johnson123@example.com",
    phone: "571-555-5555"
  },

  education: [{
    school: "Big State School",
    location: "Middle of Nowhere",
    degree: "Mechanical Engineering",
    startDate: "Aug 2016",
    endDate: "May 2020",
    id: uuidv4(),
  },{
    school: "Small School",
    location: "In the City",
    degree: "Science",
    startDate: "Aug 2020",
    endDate: "May 2024",
    id: uuidv4(),
  },],

  workExperience: [{
    jobTitle: "Junior Engineer",
    location: "The Big City",
    company: "Big Tech",
    startDate: "Jun 2020",
    endDate: "Dec 2022",
    description: "This was a great first job. blah blah blah.  Stuff I did was awesome.  I made stuff and led a small team to make stuff that was cool.",
    id: uuidv4(),
  },{
    jobTitle: "Senior Engineer",
    location: "The Bigger City",
    company: "Bigger Tech",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "This was an even better job. yada yada yada.  Stuff I did was even awesomer.  I made even better stuff and led a large team to make stuff that was even cooler.",
    id: uuidv4(),
  },],
}

export default exampleData