fn enableRawMode(termios: *c_api.termios) void {
    if (c_api.tcgetattr(c_api.STDIN_FILENO, termios) == -1) {
        std.debug.print("failed", .{});
    }
    var temp_termios = termios.*;
    temp_termios.iflag.BRKINT = false;
    temp_termios.iflag.ICRNL = false;
    temp_termios.iflag.INPCK = false;
    temp_termios.iflag.ISTRIP = false;
    temp_termios.iflag.IXON = false;
    temp_termios.oflag.OPOST = false;
    temp_termios.lflag.ECHO = false;
    temp_termios.lflag.ICANON = false;
    temp_termios.lflag.ISIG = false;
    temp_termios.lflag.IEXTEN = false;
    temp_termios.cc[@intFromEnum(c_api.V.MIN)] = 0;
    temp_termios.cc[@intFromEnum(c_api.V.TIME)] = 1;
    if (c_api.tcsetattr(c_api.STDIN_FILENO, c_api.TCSA.FLUSH, &temp_termios) == -1) {
        std.debug.print("failed", .{});
    }
}
