import type { SocketAddress, SocketOptions } from "cloudflare:sockets";
import net from "net";

// This is very scuffed, but it works and that's all that matters.
class Socket {
  public readonly readable: ReadableStream;
  public readonly writable: WritableStream;
  private address: SocketAddress;
  private client: net.Socket;

  constructor(address: SocketAddress, options: never) {
    this.address = address;
    this.client = new net.Socket();

    const receiveStream = new TransformStream();
    const sendStream = new TransformStream();
    this.readable = receiveStream.readable;
    this.writable = sendStream.writable;

    const receiveStreamWriter = receiveStream.writable.getWriter();

    this.client.connect(address.port, address.hostname);
    this.client.on("data", (chunk) => {
      receiveStreamWriter.write(chunk).then();
    });
    this.client.on("close", () => {
      receiveStreamWriter.close().then();
    });

    sendStream.readable
      .pipeTo(
        new WritableStream({
          write: (chunk) => {
            this.client.write(chunk);
          },
        }),
      )
      .then();
  }

  public async close() {
    this.client.end();
  }
}

const connect = (address: SocketAddress, options: SocketOptions | undefined) => {
  return new Socket(address, options);
};

export { connect };
