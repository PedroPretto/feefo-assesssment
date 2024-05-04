import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import org.junit.Test;

public class NormalizerTest {

    @Test
    public void testConstructor_NullNormalizedTitles() {
        try {
            new Normalizer(null);
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("Normalized titles must not be null or empty.", e.getMessage());
        }
    }

    @Test
    public void testConstructor_EmptyNormalizedTitles() {
        try {
            new Normalizer(new String[] {});
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("Normalized titles must not be null or empty.", e.getMessage());
        }
    }

    @Test
    public void testNormalize_NullInputTitle() {
        String[] normalizedTitles = { "Architect", "Software engineer", "Quantity surveyor", "Accountant" };
        Normalizer normalizer = new Normalizer(normalizedTitles);

        try {
            normalizer.normalize(null);
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("Input title must not be null or empty.", e.getMessage());
        }
    }

    @Test
    public void testNormalize_EmptyInputTitle() {
        String[] normalizedTitles = { "Architect", "Software engineer", "Quantity surveyor", "Accountant" };
        Normalizer normalizer = new Normalizer(normalizedTitles);

        try {
            normalizer.normalize("");
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException e) {
            assertEquals("Input title must not be null or empty.", e.getMessage());
        }
    }

    @Test
    public void testNormalize_NoMatch() {
        String[] normalizedTitles = { "Architect", "Software engineer", "Quantity surveyor", "Accountant" };
        Normalizer normalizer = new Normalizer(normalizedTitles);

        String inputTitle = "Java developer";
        String normalizedTitle = normalizer.normalize(inputTitle);
        assertEquals("", normalizedTitle); // No match found, expecting an empty string
    }

    @Test
    public void testNormalize_SingleBestMatch() {
        String[] normalizedTitles = { "Architect", "Software engineer", "Quantity surveyor", "Accountant" };
        Normalizer normalizer = new Normalizer(normalizedTitles);

        String inputTitle = "Software Engineer";
        String normalizedTitle = normalizer.normalize(inputTitle);
        assertEquals("Software engineer", normalizedTitle); // Best match is "Software engineer"
    }

    @Test
    public void testNormalize_MultipleBestMatches() {
        String[] normalizedTitles = { "Architect", "Software engineer", "Software Developer", "Quantity surveyor",
                "Accountant" };
        Normalizer normalizer = new Normalizer(normalizedTitles);

        String inputTitle = "Software Developer";
        String normalizedTitle = normalizer.normalize(inputTitle);
        assertTrue(normalizedTitle.equals("Software engineer") || normalizedTitle.equals("Software Developer")); // Multiple
                                                                                                                 // best
                                                                                                                 // matches,
                                                                                                                 // expecting
                                                                                                                 // one
                                                                                                                 // of
                                                                                                                 // them
    }

    @Test
    public void testNormalize_SameInputAndNormalized() {
        String[] normalizedTitles = { "Architect", "Software engineer", "Quantity surveyor", "Accountant" };
        Normalizer normalizer = new Normalizer(normalizedTitles);

        String inputTitle = "Architect";
        String normalizedTitle = normalizer.normalize(inputTitle);
        assertEquals("Architect", normalizedTitle); // Exact match
    }
}
