import java.util.HashMap;

public class HashMapTask {
  public static void main(String[] args) {
    HashMap<String, Integer> populations = new HashMap<String,Integer>();

    populations.put("UK", 64100100);
    populations.put("Germany", 80620000);
    populations.put("France", 66030000);
    populations.put("Japan", 127300000);

    Integer germanyPopulation = populations.get("Germany");
    Integer francePopulation = populations.get("France");

    System.out.println("The population of Germany is " + germanyPopulation.toString());
    System.out.println("The population of France is " + francePopulation.toString());

    for (Integer population : populations.values()) {
      System.out.println(population.toString());
    }

    for (String key : populations.keySet()) {
      System.out.println(key + " : " + populations.get(key).toString());
    }

  }
}