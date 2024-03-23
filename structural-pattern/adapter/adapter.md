#### <i> Adapter (wrapper) là một mẫu thiết kế thuộc nhóm Structural Pattern – những mẫu thiết kế cho việc thiết kế cấu trúc </i>

#### Là mẫu thiết kế chuyển đổi khuôn mẫu (interface) của một lớp thành một khuôn mẫu khác mà phía clients muốn. Cho phép 2 khuôn mẫu không liên quan làm việc cùng nhau.

#### Adapter Pattern giữ vai trò trung gian giữa hai lớp, chuyển đổi interface của một hay nhiều lớp có sẵn thành một interface khác, thích hợp cho lớp đang viết. Điều này cho phép các lớp có các interface khác nhau có thể dễ dàng giao tiếp tốt với nhau thông qua interface trung gian, <i> <b> không cần thay đổi code của lớp có sẵn cũng như lớp đang viết. </b> </i>

![](./design-patterns-object-adapter-diagram.png)

- Adaptee: định nghĩa interface không tương thích, cần được tích hợp vào
- Adapter: lớp tích hợp, giúp interface không tương thích tích hợp được với interface đang làm việc. Thực hiện việc chuyển đổi interface cho Adaptee và kết nối Adaptee với Client
- Target: một interface chứa các chức năng được sử dụng bởi Client

#### Example 1:

`Một người Việt muốn trao đổi với một người Nhật. Tuy nhiên, 2 người này không biết ngôn ngữ của nhau nên cần phải có một người để chuyển đổi từ ngôn ngữ tiếng Việt sang ngôn ngữ tiếng Nhật. Chúng ta sẽ mô hình hóa trường hợp này với Adapter Pattern như sau:`

- Client: người Việt sẽ là Client trong ví dụ này, vì anh ta cần gửi một số message cho người Nhật.
- Target: đây là nội dung message được Client cung cấp cho thông dịch viên (Translator / Adapter).
- Adapter: thông dịch viên (Translator) sẽ là Adapter, nhận message tiếng Việt từ Client và chuyển đổi nó sang tiếng Nhật trước khi gởi cho người Nhật.
- Adaptee: đây là interface hoặc class được người Nhật sử dụng để nhận message được chuyển đổi từ thông dịch viên (Translator).

![](./design-patterns-adapter-diagram-translator-example.png)

```typescript
// Target
interface VietnameseTarget {
  send: (message: string) => void;
}

// Adaptee
class JapaneseAdaptee {
  public receive(message: string): void {
    console.log(`Receive message [Japanese]: ${message}`);
  }
}

// Adapter
class TranslatorAdapter implements VietnameseTarget {
  private adaptee: JapaneseAdaptee;

  constructor(adaptee: JapaneseAdaptee) {
    this.adaptee = adaptee;
  }

  public send(message: string): void {
    console.log("Received message [Vietnamese]: " + message);
    // Receive message from Vietnamese and translate, send to Japanese
    this.adaptee.receive(this.translateMessage(message));
  }

  private translateMessage(message: string): string {
    console.log("Translating message...");
    // Translate message from Vietnamese to Japanese
    return message + " -> こんにちは";
  }
}

const main = () => {
  const client = new TranslatorAdapter(new JapaneseAdaptee());
  client.send("Xin chào");
};
main();
```

#### Example2:

`Giả sử bạn đang làm việc trong một dự án phát triển phần mềm quản lý tài liệu, và bạn có một lớp cũ SimpleTextEditor cho phép thực hiện các thao tác cơ bản như viết và lưu văn bản. Lớp này có hai phương thức chính là writeText(text: String) và saveText()`

`Tuy nhiên, dự án của bạn muốn mở rộng tính năng để hỗ trợ tài liệu đa định dạng, bao gồm cả tài liệu PDF. Bạn quyết định sử dụng một thư viện bên thứ ba chuyên xử lý tài liệu PDF, nhưng thư viện này có một interface khác biệt, với các phương thức addContent(content: String) và generatePDF().`

`Ở đây, lớp SimpleTextEditor và thư viện bên thứ ba không tương thích vì chúng có các phương thức và mục đích sử dụng khác nhau. Để giải quyết vấn đề này mà không làm thay đổi cấu trúc hoặc logic hiện tại của hệ thống, bạn có thể tạo ra một "adapter":`

```typescript
// Target
interface SimpleTextEditor {
  writeText: (text: string) => void;
  saveText: () => void;
}

// Adaptee
// Thư viện này của bên thứ 3, không sửa code
interface PDFLibrary {
  addContent: (content: string) => void;
  generatePDF: () => void;
}

// Adapter
class PDFAdapter implements SimpleTextEditor {
  pdfLibrary: PDFLibrary;

  public PDFAdapter(pdfLibrary: PDFLibrary) {
    this.pdfLibrary = pdfLibrary;
  }

  public writeText(text: string): void {
    // Thực hiện việc chuyển đổi text -> pdf trong này, chứ không sửa vào 2 class có sẵn
    this.pdfLibrary.addContent(this.convertTextToPDF(text));
  }

  public saveText(): void {
    this.pdfLibrary.generatePDF();
  }

  private convertTextToPDF(text: string): string {
    // ... Convert text to pdf
    return text;
  }
}
```
