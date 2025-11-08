#!/bin/bash

# Convert WAV files to MP3 (128kbps) for better compression
# This reduces ~750MB of WAV files to ~100MB of MP3

VOICES_DIR="./monogatari/assets/voices"
BACKUP_DIR="./monogatari/assets/voices-backup"

echo "🎵 Audio Conversion Script"
echo "=========================="
echo "Source: $VOICES_DIR"
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg not found. Install it first:"
    echo "   brew install ffmpeg"
    exit 1
fi

# Count files
WAV_COUNT=$(find "$VOICES_DIR" -name "*.wav" | wc -l)
MP3_COUNT=$(find "$VOICES_DIR" -name "*.mp3" | wc -l)

echo "📊 Current state:"
echo "   WAV files: $WAV_COUNT"
echo "   MP3 files: $MP3_COUNT"
echo ""

if [ "$WAV_COUNT" -eq 0 ]; then
    echo "✅ No WAV files found. All audio is already optimized!"
    exit 0
fi

# Create backup
echo "📦 Creating backup..."
mkdir -p "$BACKUP_DIR"
cp "$VOICES_DIR"/*.wav "$BACKUP_DIR/" 2>/dev/null
echo "   Backup saved to: $BACKUP_DIR"
echo ""

# Convert WAV to MP3
echo "🔄 Converting WAV → MP3 (128kbps)..."
echo ""

CONVERTED=0
FAILED=0

for wav_file in "$VOICES_DIR"/*.wav; do
    if [ -f "$wav_file" ]; then
        filename=$(basename "$wav_file")
        mp3_file="${wav_file%.wav}.mp3"
        
        echo -n "   Converting: $filename ... "
        
        if ffmpeg -i "$wav_file" -b:a 128k -y "$mp3_file" > /dev/null 2>&1; then
            echo "✅"
            ((CONVERTED++))
            # Optional: remove original WAV after successful conversion
            # rm "$wav_file"
        else
            echo "❌"
            ((FAILED++))
        fi
    fi
done

echo ""
echo "📈 Conversion complete:"
echo "   ✅ Converted: $CONVERTED files"
echo "   ❌ Failed: $FAILED files"
echo ""

# Show size comparison
echo "💾 Size comparison:"
WAV_SIZE=$(du -sh "$VOICES_DIR" | awk '{print $1}')
echo "   Total size: $WAV_SIZE"
echo ""

echo "✨ Done! Your audio files are now optimized for web."
echo ""
echo "Next steps:"
echo "1. Test the game to ensure all voices play correctly"
echo "2. Once verified, you can delete the backup: rm -rf $BACKUP_DIR"
echo "3. Delete original WAV files: find $VOICES_DIR -name '*.wav' -delete"
