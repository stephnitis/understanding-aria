# Understanding ARIA

## About

- This project was created to demonstrate examples and use cases for ARIA Labels and Status Roles
- It is hoped this can provide a better understanding of how assistive technology interprets these fundamentals of accessibility

## Alerts

- Giving an element the role attribute with the value of alert is going to set that element up as an aria-live region with the value of assertive
- This indicates that updates to the region have the highest priority and should be presented to the user immediately
- Assertive means that the screen reader will interupt whatever it is executing and read the message, as opposed to with the value of polite where the screen reader will finish its task and then announce the message
- Assistive technology such as VoiceOver may not recognize dynamically generated alerts - as they may be processed after the browser/assistive technology has generated the document

### References

- [When to use aria-label](https://bootcamp.uxdesign.cc/when-to-use-aria-label-or-screen-reader-only-text-cd778627b43b)
- [Usability and Web Accessibility](https://usability.yale.edu/web-accessibility/articles/links)
- [Working Example of role=status](https://www.w3.org/WAI/WCAG22/working-examples/aria-role-status-searchresults/)
- [WCAG Understanding Status Messages](https://www.w3.org/WAI/WCAG21/Understanding/status-messages.html)
- [Provide Notification of Dynamic Changes](https://accessibility.huit.harvard.edu/provide-notification-dynamic-changes-content)
- [Role Alert VS Aria Live](https://www.youtube.com/watch?v=BRB6pNYATGE)
- [Timer Example](https://codepen.io/heydon/pres/NGgNjZ)
- [A11ycasts Alerts and Live Regions](https://www.youtube.com/watch?v=5lzAj1ahRSI)