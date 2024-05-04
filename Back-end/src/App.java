public class App {
    public static void main(String[] args) throws Exception {
        try {
            String[] normalizedTitles = { "Architect", "Software engineer", "Quantity surveyor", "Accountant" };
            Normalizer n = new Normalizer(normalizedTitles);

            String jt = "Java engineer";
            String normalisedTitle = n.normalize(jt);
            System.out.println(normalisedTitle);

            jt = "C# engineer";
            normalisedTitle = n.normalize(jt);
            System.out.println(normalisedTitle);

            jt = "Chief Accountant";
            normalisedTitle = n.normalize(jt);
            System.out.println(normalisedTitle);
        } catch (IllegalArgumentException e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
