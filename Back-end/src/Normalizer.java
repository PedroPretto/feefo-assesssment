public class Normalizer {

    private final String[] normalizedTitles;

    public Normalizer(String[] normalizedTitles) {
        if (normalizedTitles == null || normalizedTitles.length == 0) {
            throw new IllegalArgumentException("Normalized titles must not be null or empty.");
        }
        this.normalizedTitles = normalizedTitles.clone(); // Clone to prevent external modification
    }

    public String normalize(String inputTitle) {
        if (inputTitle == null || inputTitle.trim().isEmpty()) {
            throw new IllegalArgumentException("Input title must not be null or empty.");
        }
        double maxScore = 0;
        String bestMatch = "";

        for (String title : normalizedTitles) {
            double score = similarityScore(inputTitle.toLowerCase(), title.toLowerCase());
            if (score > maxScore) {
                maxScore = score;
                bestMatch = title;
            }
        }

        return bestMatch;
    }

    private double similarityScore(String input, String normalized) {
        int intersection = 0;
        for (String word : input.split(" ")) {
            if (normalized.contains(word)) {
                intersection++;
            }
        }
        return (double) intersection / Math.max(input.split(" ").length, normalized.split(" ").length);
    }
}
