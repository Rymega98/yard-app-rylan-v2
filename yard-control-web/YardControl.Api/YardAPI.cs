namespace YardControl.Api;

public class YardAPI
{
    public string Summary { get; set; } = string.Empty;

    public class Trailer
    {
        public string Id { get; set; } = string.Empty;
        public string TrailerNumber { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public string Spot { get; set; } = string.Empty;
        public string? Driver { get; set; }
        public string? Carrier { get; set; }
        public string? LoadRef { get; set; }
        public string UpdatedAt { get; set; } = string.Empty;
        public ChecklistItem[]? Checklist { get; set; }
    }

public class ChecklistItem
{
    public string Key { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    public string Result { get; set; } = string.Empty;
    public string? Note { get; set; }
}
}
