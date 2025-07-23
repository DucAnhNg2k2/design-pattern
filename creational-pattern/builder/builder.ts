// Product
class Student {
  private id: string;
  private firstName: string;
  private lastName: string;

  constructor(id: string, firstName: string, lastName: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// Builder
interface StudentBuilder {
  setId: (id: string) => StudentBuilder;
  setFirstName: (firstName: string) => StudentBuilder;
  setLastName: (lastName: string) => StudentBuilder;
  build: () => Student;
}

// ConcreteBuilder
class StudentConcreteBuilder implements StudentBuilder {
  private id: string;
  private firstName: string;
  private lastName: string;

  constructor() {
    this.id = "";
    this.firstName = "";
    this.lastName = "";
  }

  public setId(id: string): StudentBuilder {
    this.id = id;
    return this;
  }

  public setFirstName(firstName: string): StudentBuilder {
    this.firstName = firstName;
    return this;
  }

  public setLastName(lastName: string): StudentBuilder {
    this.lastName = lastName;
    return this;
  }

  public build(): Student {
    return new Student(this.id, this.firstName, this.lastName);
  }
}

const main = () => {
  const student = new StudentConcreteBuilder()
    .setId("2305")
    .setFirstName("Nguyen")
    .setLastName("Duc Anh")
    .build();

  console.log(student);
  /*
    Output:
    Student {
      id: '2305',
      firstName: 'Nguyen',
      lastName: 'Duc Anh'
    }
  */
};
main();
