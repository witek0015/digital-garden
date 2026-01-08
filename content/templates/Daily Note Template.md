---
Year: <% tp.date.now("YYYY") %>
Month: <% tp.date.now("MMMM") %>
Date: <% tp.date.now("YYYY-MM-DD") %>
Journal: true
Gym: false
Mood:
---
<% await tp.file.move("/Journal/" + "/" + tp.date.now("YYYY") + "/" + tp.date.now("MM - MMMM") + "/📓" + tp.date.now("YYYY-MM-DD")) %>
#  <% tp.date.now("dddd, MMMM Do YYYY") %>

<%tp.web.daily_quote() %>
## Daily Entries
### What I did Today

### Reflections
#### What I liked

#### What I disliked

#### What am I grateful for?

### Daily Thoughts
##
<%*
let fileName = "📓" + tp.date.now("YYYY-WW"); // Define the file name
let folderPath = "zmetafiles"; // Define the folder path (relative to vault root)
let fullPath = folderPath + "/" + fileName; // Full path with extension

// Check if the file already exists
if (await tp.file.exists(fullPath)) {
    tR += `[[${fileName}]]`;
} else {
    // Define initial content for the new file
    let initialContent = "#📓2025";

    // Create the file if it doesn't exist
    await tp.file.create_new(initialContent, fullPath);
    tR += `[[${fileName}]]`;
}
%>
