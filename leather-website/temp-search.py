from pathlib import Path
text = Path("temp-home.html").read_text(encoding="utf-16", errors="ignore")
for term in ['form noValidate', 'noValidate', 'type="text"', 'type="email"', 'type="tel"', 'select', 'textarea', 'form', 'button']:
    print(term, text.count(term))
