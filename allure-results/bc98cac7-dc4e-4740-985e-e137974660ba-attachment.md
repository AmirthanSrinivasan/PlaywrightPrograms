# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: InterviwePrograms\pracplaywright.spec.js >> New
- Location: tests\InterviwePrograms\pracplaywright.spec.js:3:1

# Error details

```
TypeError: allFrames.length is not a function
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - iframe [ref=e2]:
    - generic [ref=f1e2]:
      - text: Frame Test Page
      - generic [ref=f1e5]:
        - textbox [ref=f1e6]
        - text: Frame1
  - generic [ref=e3]:
    - iframe [ref=e4]:
      - generic [ref=f2e3]:
        - textbox [ref=f2e4]
        - text: Frame2
    - iframe [ref=e5]:
      - generic [ref=f3e1]:
        - generic [ref=f3e3]:
          - textbox [ref=f3e4]
          - text: Frame3
        - generic [ref=f3e5]:
          - paragraph [ref=f3e6]: "iframe inside frame:"
          - iframe [ref=f3e7]: Loading...
    - iframe [ref=e6]:
      - generic [ref=f4e3]:
        - textbox [ref=f4e4]
        - text: Frame4
  - iframe [ref=e7]:
    - generic [ref=f5e1]:
      - generic [ref=f5e3]:
        - textbox [ref=f5e4]
        - text: Frame5
      - link "https://a9t9.com" [ref=f5e6] [cursor=pointer]:
        - /url: https://a9t9.com
```

# Test source

```ts
  1 | const{test, expect} = require('@playwright/test')
  2 | 
  3 | test('New', async({page})=>{
  4 | 
  5 |     await page.goto("https://ui.vision/demo/webtest/frames/")
  6 |     const allFrames = page.frames()
> 7 |     console.log("Numberof Frames: "+ allFrames.length())
    |                                                ^ TypeError: allFrames.length is not a function
  8 | 
  9 | })
```