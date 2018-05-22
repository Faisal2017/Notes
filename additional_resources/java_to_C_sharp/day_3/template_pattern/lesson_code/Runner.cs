namespace Bear {
  class Runner {
    public static void Main()
    {
      Bear grizzlyBear = new GrizzlyBear();
      grizzlyBear.TypicalDay();

      Bear bear = new PolarBear();
      bear.TypicalDay();
    }
  }
}