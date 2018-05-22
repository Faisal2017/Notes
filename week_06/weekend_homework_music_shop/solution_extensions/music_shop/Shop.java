package music_shop;
import java.util.ArrayList;
import behaviours.*;

public class Shop {
  private String name;
  private ArrayList<Sellable> stock;

  public Shop(String name) {
    this.name = name;
    this.stock = new ArrayList<Sellable>();
  }

  public String getName() {
    return this.name;
  }

  public int stockCount() {
    return this.stock.size();
  }

  public void addToStock(Sellable item) {
    this.stock.add(item);
  }

  public void removeFromStock(Sellable item) {
    this.stock.remove(item);
  }

  public int totalPotentialProfit() {
    int total = 0;
    for (Sellable item : stock) {
      total += item.calculateMarkup();
    }
    return total;
  }
}
