import React, { useRef, useState } from 'react';
import { MAX_FILE_SIZE_MB, MAX_FILE_SIZE_BYTES } from '../../constants/upload';

function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

export default function DocumentUploadStep({ file, error, onFileSelect, onFileRemove }) {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Only set to false if leaving the drop container
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragging(false);
  };

  const validateAndProcessFile = (selectedFile) => {
    if (!selectedFile) return;

    // Check extension and mime type
    const fileName = selectedFile.name || '';
    const isPdfExtension = fileName.toLowerCase().endsWith('.pdf');
    const isPdfMime = selectedFile.type === 'application/pdf' || selectedFile.type === '';

    if (!isPdfExtension && !isPdfMime) {
      onFileSelect(null, `Only PDF files are supported for this milestone. Received: "${fileName}". Please select a .pdf document.`);
      return;
    }

    // Check file size
    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      onFileSelect(null, `File size (${formatFileSize(selectedFile.size)}) exceeds the maximum limit of ${MAX_FILE_SIZE_MB} MB. Please upload a smaller document.`);
      return;
    }

    if (selectedFile.size === 0) {
      onFileSelect(null, 'The selected file is empty (0 bytes). Please upload a valid document.');
      return;
    }

    onFileSelect(selectedFile, null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      validateAndProcessFile(droppedFile);
      e.dataTransfer.clearData();
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
    // Reset file input value so re-selecting same file triggers change
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="space-y-6">
      {/* Hidden native input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        onChange={handleFileInputChange}
        className="hidden"
        id="document-file-input"
        aria-label="Upload PDF document"
      />

      {/* Step Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Upload Your Legal Document
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Upload your contract, lease, or agreement in PDF format. We will extract and review its terms client-side before configuring your analysis profile.
        </p>
      </div>

      {/* Error Message Banner */}
      {error && (
        <div
          role="alert"
          className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in slide-in-from-top-1 duration-200"
        >
          <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div className="flex-1">
            <span className="font-semibold block mb-0.5">Upload Error</span>
            <span>{error}</span>
          </div>
          <button
            type="button"
            onClick={() => onFileSelect(null, null)}
            className="text-red-400 hover:text-red-200 text-xs font-mono px-2 py-0.5 rounded bg-red-950/40 border border-red-800/40 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Upload Dropzone / File Selected Card */}
      {!file ? (
        <div
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
          className={`relative group rounded-2xl border-2 border-dashed p-8 sm:p-12 text-center transition-all duration-300 cursor-pointer flex flex-col items-center justify-center ${
            isDragging
              ? 'border-indigo-400 bg-indigo-500/10 shadow-[0_0_35px_rgba(99,102,241,0.25)] scale-[1.01]'
              : 'border-zinc-700/80 hover:border-indigo-500/60 bg-zinc-900/30 hover:bg-zinc-900/60'
          }`}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Upload Icon */}
          <div className="relative mb-5 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/60 flex items-center justify-center shadow-inner group-hover:border-indigo-500/50 group-hover:scale-105 transition-all duration-300">
            <svg
              className={`w-8 h-8 sm:w-10 sm:h-10 transition-colors ${
                isDragging ? 'text-indigo-400' : 'text-zinc-400 group-hover:text-indigo-300'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
          </div>

          {/* Dropzone Instructions */}
          <div className="space-y-2 max-w-md">
            <p className="text-base sm:text-lg font-semibold text-white">
              {isDragging ? 'Drop your PDF here' : 'Drag & drop your PDF here'}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400">
              or <span className="text-indigo-400 font-medium underline underline-offset-4 group-hover:text-indigo-300">browse files</span> on your device
            </p>
          </div>

          {/* Metadata constraints badge */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500">
            <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 font-mono text-[11px] text-zinc-300">
              Format: PDF only
            </span>
            <span>•</span>
            <span className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 font-mono text-[11px] text-zinc-300">
              Max Size: {MAX_FILE_SIZE_MB} MB
            </span>
          </div>
        </div>
      ) : (
        /* Selected File Card */
        <div className="rounded-2xl bg-zinc-900/60 border border-indigo-500/40 p-5 sm:p-6 shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* File Details */}
            <div className="flex items-center gap-4 min-w-0">
              {/* PDF Icon Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-red-950/60 to-zinc-900 border border-red-500/30 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 13h6m-6 4h4" />
                </svg>
              </div>

              {/* Name & Size */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-white truncate" title={file.name}>
                    {file.name}
                  </h3>
                  <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Ready
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-1 flex items-center gap-2 font-mono">
                  <span>{formatFileSize(file.size)}</span>
                  <span>•</span>
                  <span>PDF Document</span>
                </p>
              </div>
            </div>

            {/* Actions: Replace / Remove */}
            <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
              <button
                type="button"
                onClick={handleBrowseClick}
                className="px-3.5 py-2 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/60 transition-colors cursor-pointer"
              >
                Replace File
              </button>
              <button
                type="button"
                onClick={onFileRemove}
                className="px-3.5 py-2 rounded-xl text-xs font-medium text-red-400 hover:text-red-300 bg-red-950/30 hover:bg-red-900/40 border border-red-800/40 transition-colors cursor-pointer"
              >
                Remove
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Trust & Confidentiality Notice */}
      <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs text-zinc-400 flex items-center gap-3">
        <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span>
          <strong className="text-zinc-300 font-medium">Confidential & Client-Side:</strong> Your document is currently retained only in your browser session. Backend document parsing will be connected in subsequent milestones.
        </span>
      </div>
    </div>
  );
}
