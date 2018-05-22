import static org.junit.Assert.*;
import org.junit.*;
import music_shop.*;
import behaviours.*;

public class ShopTest {
  Shop shop;
  Sellable item;

  @Before
  public void before() {
    shop = new Shop("Ray's Music Exchange");
    item = new MusicBook("The Six Chord Songbook", 3, 5);
  }

  @Test
  public void hasName() {
    assertEquals("Ray's Music Exchange", shop.getName());
  }

  @Test
  public void stockStartsEmpty() {
    assertEquals(0, shop.stockCount());
  }

  @Test
  public void canAddToStock() {
    shop.addToStock(item);
    assertEquals(1, shop.stockCount());
  }

  @Test
  public void canAddGuitarToStock() {
    item = new Guitar("Gibson SG", "Cherry Red", 6, 400, 500);
    shop.addToStock(item);
    assertEquals(1, shop.stockCount());
  }

  @Test
  public void canRemoveItemFromStock() {
    shop.addToStock(item);
    shop.removeFromStock(item);
    assertEquals(0, shop.stockCount());
  }
    
}