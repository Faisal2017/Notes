package music_shop;
import behaviours.*;

public class Piano extends Instrument implements Playable, Sellable {
  private String manufacturer;
  private int buyPrice;
  private int sellPrice;

  public Piano(String manufacturer, String colour, int buyPrice, int sellPrice) {
    super(colour, "Keyboard");
    this.manufacturer = manufacturer;
    this.buyPrice = buyPrice;
    this.sellPrice = sellPrice;
  }

  public String getManufacturer() {
    return this.manufacturer;
  }

  public int getBuyPrice() {
    return this.buyPrice;
  }

  public int getSellPrice() {
    return this.sellPrice;
  }

  public int calculateMarkup() {
    return this.sellPrice - this.buyPrice;
  }

  public String play() {
    return "Plink Plonk";
  }

}