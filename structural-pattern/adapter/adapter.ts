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

// ------------

// // Target
// interface SimpleTextEditor {
//   writeText: (text: string) => void;
//   saveText: () => void;
// }

// // Adaptee
// // Thư viện này của bên thứ 3, không sửa code
// interface PDFLibrary {
//   addContent: (content: string) => void;
//   generatePDF: () => void;
// }

// // Adapter
// class PDFAdapter implements SimpleTextEditor {
//   pdfLibrary: PDFLibrary;

//   public PDFAdapter(pdfLibrary: PDFLibrary) {
//     this.pdfLibrary = pdfLibrary;
//   }

//   public writeText(text: string): void {
//     // Thực hiện việc chuyển đổi text -> pdf trong này, chứ không sửa vào 2 class có sẵn
//     this.pdfLibrary.addContent(this.convertTextToPDF(text));
//   }

//   public saveText(): void {
//     this.pdfLibrary.generatePDF();
//   }

//   private convertTextToPDF(text: string): string {
//     // ... Convert text to pdf
//     return text;
//   }
// }
