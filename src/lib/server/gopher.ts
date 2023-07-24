import { dev } from "$app/environment";

const imports = async (): Promise<{ Blob: Blob; connect: any }> => {
  let connect;
  let BlobTemp;

  if (dev) {
    ({ connect } = await import("$lib/server/sockets"));
    const { Blob } = await import("buffer");
    BlobTemp = Blob;
  } else {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ({ connect } = await import("cloudflare:sockets"));
    BlobTemp = Blob;
  }

  return { connect, Blob: BlobTemp };
};

export const getFromGopherServer = async (
  host: string,
  port: number | string,
  path: string,
): Promise<Blob> => {
  const { connect, Blob } = await imports();

  const socket = connect({ hostname: host, port: port });
  const writer = socket.writable.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(path + "\r\n");

  await writer.write(encoded);

  const reader: ReadableStreamDefaultReader = socket.readable.getReader();
  const chunks: Uint8Array[] = [];

  // eslint-disable-next-line no-constant-condition
  while (true) {
    const { done, value }: ReadableStreamReadResult<Uint8Array> = await reader.read();
    if (done) break;

    chunks.push(value);
  }

  return new Blob(chunks);
};
