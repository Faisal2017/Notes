namespace Bear {
  class Bear {
    private string name;

    private int age;

    private double weight;

    public string Name
    {
        get { return name; }
        set { name = value; }
    }

    public int Age {
      get { return age; }
      set { age = value; }
    }

    public double Weight {
      get { return weight; }
      set { weight = value; }
    }
    //public string name { get; set; }
    
    public Bear (string name, int age, double weight) {
      this.name = name;
      this.age = age;
      this.weight = weight;
    }

    public bool ReadyToHibernate() {
      return (this.weight >= 80);
    }
  }
}