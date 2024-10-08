#version 330 core

layout (location = 0) out vec4 fragColor;

in vec3 marker_color;
in vec2 uv;

uniform sampler2D u_texture;

void main() {
    fragColor.rgb = marker_color;
    fragColor.a = 0.5f;
}