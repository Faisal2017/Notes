package music_shop;
import behaviours.*;

public abstract class StockItem implements Sellable {
  protected int buyPrice;
  protected int sellPrice;

  public StockItem(int buyPrice, int sellPrice) {
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
  }

  public int getBuyPrice() {
    return this.buyPrice;
  }

  public int getSellPrice() {
    return this.sellPrice;
  }
}