package music_shop;
import behaviours.*;

public abstract class Instrument extends StockItem implements Playable {
  private String colour;
  private InstrumentType type;

  public Instrument(String colour, InstrumentType type, int costPrice, int retailPrice) {
    super(costPrice, retailPrice);
    this.colour = colour;
    this.type = type;
  }

  public String getColour() {
    return this.colour;
  }

  public InstrumentType getType() {
    return this.type;
  }
}